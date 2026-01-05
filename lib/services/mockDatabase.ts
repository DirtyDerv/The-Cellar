/**
 * Mock Database Service
 * This simulates Supabase operations with in-memory data
 * Replace this with real Supabase client when ready
 */

import { Product, Scan, ScanItem, UserProfile } from '@/types';
import { mockProducts, mockScans, mockUsers, addMockScan, updateMockScanItem } from './mockData';

class MockDatabase {
  // Products
  async getProducts(): Promise<Product[]> {
    return Promise.resolve(mockProducts);
  }

  async getProductById(id: string): Promise<Product | null> {
    const product = mockProducts.find(p => p.id === id);
    return Promise.resolve(product || null);
  }

  async searchProducts(query: string): Promise<Product[]> {
    const filtered = mockProducts.filter(p =>
      p.name.toLowerCase().includes(query.toLowerCase())
    );
    return Promise.resolve(filtered);
  }

  // Scans
  async getScans(userId?: string): Promise<Scan[]> {
    const filtered = userId
      ? mockScans.filter(s => s.user_id === userId)
      : mockScans;
    return Promise.resolve(filtered);
  }

  async getScanById(id: string): Promise<Scan | null> {
    const scan = mockScans.find(s => s.id === id);
    return Promise.resolve(scan || null);
  }

  async createScan(scan: Omit<Scan, 'id'>): Promise<Scan> {
    const newScan: Scan = {
      ...scan,
      id: `scan-${Date.now()}`,
    };
    addMockScan(newScan);
    return Promise.resolve(newScan);
  }

  async updateScanItem(scanId: string, itemId: string, quantity: number): Promise<void> {
    updateMockScanItem(scanId, itemId, quantity);
    return Promise.resolve();
  }

  // Users
  async getCurrentUser(): Promise<UserProfile | null> {
    // In mock mode, return staff user by default
    return Promise.resolve(mockUsers[0]);
  }

  async getUserById(id: string): Promise<UserProfile | null> {
    const user = mockUsers.find(u => u.id === id);
    return Promise.resolve(user || null);
  }
}

// Export singleton instance
export const db = new MockDatabase();
