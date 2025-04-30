
export interface MenuItem {
  id: string;
  label: string;
  subItems?: SubMenuItem[];
  isPage?: boolean;
  path?: string;
}

export interface SubMenuItem {
  id: string;
  label: string;
  description?: string;
}
