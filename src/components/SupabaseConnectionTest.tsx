
import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from './ui/button';
import { toast } from './ui/use-toast';

const SupabaseConnectionTest = () => {
  const [connectionStatus, setConnectionStatus] = useState<'idle' | 'testing' | 'success' | 'error'>('idle');

  const testConnection = async () => {
    try {
      setConnectionStatus('testing');
      
      // Simple query to check if we can communicate with Supabase
      const { data, error } = await supabase.from('_unused_query_').select('*').limit(1);
      
      // This query will fail with a "relation does not exist" error, but that's actually good!
      // It means we successfully connected to Supabase, just the table doesn't exist yet
      if (error && error.code === '42P01') {
        // This is the expected error code for "relation does not exist"
        setConnectionStatus('success');
        toast({
          title: "Connection Successful",
          description: "Your Supabase project is properly connected! The table doesn't exist yet, but the connection works.",
          duration: 5000
        });
        console.log("Supabase is connected successfully!");
      } else if (error) {
        // Any other error means there's a connection issue
        setConnectionStatus('error');
        toast({
          title: "Connection Error",
          description: `Something went wrong: ${error.message}`,
          variant: "destructive",
          duration: 5000
        });
        console.error("Supabase connection error:", error);
      } else {
        // This shouldn't happen since we queried a non-existent table
        setConnectionStatus('success');
        toast({
          title: "Connection Successful",
          description: "Your Supabase project is properly connected!",
          duration: 5000
        });
        console.log("Supabase connection success, data:", data);
      }
    } catch (err) {
      setConnectionStatus('error');
      toast({
        title: "Connection Error",
        description: `Failed to connect: ${err instanceof Error ? err.message : String(err)}`,
        variant: "destructive",
        duration: 5000
      });
      console.error("Supabase connection exception:", err);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 p-6 border rounded-lg shadow-lg bg-card max-w-md mx-auto">
      <h3 className="text-xl font-bold">Supabase Connection Test</h3>
      
      <Button 
        onClick={testConnection}
        disabled={connectionStatus === 'testing'}
        variant={
          connectionStatus === 'idle' ? 'default' :
          connectionStatus === 'success' ? 'success' : 
          connectionStatus === 'error' ? 'destructive' : 
          'outline'
        }
        className="w-full"
      >
        {connectionStatus === 'idle' && 'Test Supabase Connection'}
        {connectionStatus === 'testing' && 'Testing...'}
        {connectionStatus === 'success' && '✅ Connected Successfully'}
        {connectionStatus === 'error' && '❌ Connection Failed'}
      </Button>
      
      {connectionStatus === 'success' && (
        <p className="text-sm text-green-600 mt-2">
          Your Supabase project is properly connected! When you're ready to create tables and start building, let me know.
        </p>
      )}
      
      {connectionStatus === 'error' && (
        <p className="text-sm text-red-600 mt-2">
          There was an error connecting to your Supabase project. Please check the console for details.
        </p>
      )}
    </div>
  );
};

export default SupabaseConnectionTest;
