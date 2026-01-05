import { Product, Scan, ScanItem, UserProfile } from '@/types';

// Mock Products Database
export const mockProducts: Product[] = [
  { id: '1', name: 'Guinness Draught', category: 'Beer' },
  { id: '2', name: 'Heineken', category: 'Beer' },
  { id: '3', name: 'Corona Extra', category: 'Beer' },
  { id: '4', name: 'Stella Artois', category: 'Beer' },
  { id: '5', name: 'Budweiser', category: 'Beer' },
  { id: '6', name: 'Coca-Cola', category: 'Soft Drink' },
  { id: '7', name: 'Sprite', category: 'Soft Drink' },
  { id: '8', name: 'Red Bull', category: 'Energy Drink' },
];

// Mock Users
export const mockUsers: UserProfile[] = [
  { id: 'user-1', email: 'staff@thecellar.com', role: 'staff' },
  { id: 'user-2', email: 'manager@thecellar.com', role: 'manager' },
];

// Mock Scans (will be populated at runtime)
export let mockScans: Scan[] = [
  {
    id: 'scan-1',
    user_id: 'user-1',
    timestamp: new Date(Date.now() - 86400000).toISOString(),
    location: 'Main Bar Fridge',
    status: 'completed',
    items: [
      {
        id: 'item-1',
        scan_id: 'scan-1',
        product_id: '1',
        product_name: 'Guinness Draught',
        quantity: 12,
        confidence_score: 0.95,
        manually_edited: false,
      },
      {
        id: 'item-2',
        scan_id: 'scan-1',
        product_id: '2',
        product_name: 'Heineken',
        quantity: 8,
        confidence_score: 0.88,
        manually_edited: false,
      },
    ],
  },
];

// Helper to add new scan
export function addMockScan(scan: Scan) {
  mockScans.push(scan);
}

// Helper to update scan item
export function updateMockScanItem(scanId: string, itemId: string, quantity: number) {
  const scan = mockScans.find(s => s.id === scanId);
  if (scan) {
    const item = scan.items.find(i => i.id === itemId);
    if (item) {
      item.quantity = quantity;
      item.manually_edited = true;
    }
  }
}
