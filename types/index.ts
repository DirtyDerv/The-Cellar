// Product Types
export interface Product {
  id: string;
  name: string;
  category: string;
  created_at?: string;
  updated_at?: string;
}

// Scan Types
export interface Scan {
  id: string;
  user_id: string;
  timestamp: string;
  location?: string;
  status: 'pending' | 'completed' | 'failed';
  items: ScanItem[];
}

export interface ScanItem {
  id: string;
  scan_id: string;
  product_id: string;
  product_name: string;
  quantity: number;
  confidence_score: number;
  manually_edited: boolean;
  created_at?: string;
}

// AI Vision API Types
export interface GLMVisionRequest {
  model: 'glm-4v' | 'glm-4-6v';
  messages: Array<{
    role: 'user' | 'assistant' | 'system';
    content: Array<{
      type: 'text' | 'image_url';
      text?: string;
      image_url?: {
        url: string;
      };
    }>;
  }>;
  temperature?: number;
  max_tokens?: number;
}

export interface GLMVisionResponse {
  products: Array<{
    name: string;
    quantity: number;
    confidence?: number;
  }>;
}

// User Types
export interface UserProfile {
  id: string;
  email: string;
  role: 'staff' | 'manager';
  created_at?: string;
}

// Camera Types
export interface CameraCapture {
  imageData: string; // base64 encoded image
  timestamp: string;
  width: number;
  height: number;
}
