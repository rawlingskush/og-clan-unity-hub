
export interface SubMenuItem {
  id: string;
  label: string;
  description: string;
}

export interface MenuItem {
  id: string;
  label: string;
  subItems?: SubMenuItem[];
}
