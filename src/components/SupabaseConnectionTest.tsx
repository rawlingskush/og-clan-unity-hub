
import React, { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { CheckCircle, XCircle } from 'lucide-react';

const SupabaseConnectionTest = () => {
  const [testResult, setTestResult] = useState<'idle' | 'success' | 'error'>('idle');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const testConnection = async () => {
    setLoading(true);
    setTestResult('idle');
    setErrorMessage(null);

    try {
      // Instead of trying to query a specific table, let's use the healthcheck function
      const { error } = await supabase.from('_fake_table_for_test_').select('*').limit(1).throwOnError();
      
      // If the call to Supabase succeeds, it means connection works 
      // (even if the table doesn't exist, we'll get a specific error)
      setTestResult('success');
      setErrorMessage(null);
    } catch (error) {
      // Check if the error is a table not found error (which means connection works)
      if (error instanceof Error && error.message.includes('relation') && error.message.includes('does not exist')) {
        setTestResult('success');
        setErrorMessage(null);
      } else {
        // Actual connection error
        setTestResult('error');
        setErrorMessage(error instanceof Error ? error.message : 'Unknown error occurred');
        console.error('Supabase connection error:', error);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Supabase Connection Test</h2>
      
      <Button 
        onClick={testConnection} 
        disabled={loading}
        className="w-full mb-4"
      >
        {loading ? 'Testing...' : 'Test Connection'}
      </Button>
      
      {testResult === 'success' && (
        <Alert variant="default" className="border-green-500 bg-green-50">
          <CheckCircle className="h-5 w-5 text-green-500" />
          <AlertTitle className="ml-2">Success!</AlertTitle>
          <AlertDescription>
            Connected to Supabase successfully. Your Supabase project is properly configured.
          </AlertDescription>
        </Alert>
      )}
      
      {testResult === 'error' && (
        <Alert variant="destructive">
          <XCircle className="h-5 w-5" />
          <AlertTitle className="ml-2">Connection Failed</AlertTitle>
          <AlertDescription>
            Failed to connect to Supabase: {errorMessage || 'Unknown error'}
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
};

export default SupabaseConnectionTest;
