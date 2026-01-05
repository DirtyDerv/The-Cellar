/**
 * GLM-4V Vision API Client
 * Integrates with Zhipu AI's GLM-4V Vision model for product recognition
 * API Docs: https://open.bigmodel.cn/dev/api
 */

import { GLMVisionRequest, GLMVisionResponse } from '@/types';

const GLM_API_BASE = 'https://open.bigmodel.cn/api/paas/v4';
const DEFAULT_MODEL = 'glm-4v';

export class VisionApiClient {
  private apiKey: string;

  constructor(apiKey?: string) {
    this.apiKey = apiKey || process.env.GLM_API_KEY || '';
  }

  /**
   * Analyze an image and identify products with quantities
   */
  async analyzeImage(imageBase64: string): Promise<GLMVisionResponse> {
    if (!this.apiKey) {
      throw new Error('GLM_API_KEY is not configured');
    }

    const prompt = `You are an expert at identifying beverages and products in retail/pub environments.

Analyze this image of a fridge/shelf and identify all distinct products (beers, drinks, etc.).
For each product, provide:
1. The exact brand/product name
2. The quantity/count of that product visible

Return ONLY a JSON object in this exact format:
{
  "products": [
    {"name": "Product Name", "quantity": 5, "confidence": 0.9},
    {"name": "Another Product", "quantity": 3, "confidence": 0.85}
  ]
}

Rules:
- Be specific with product names (e.g., "Heineken" not "Beer")
- Count carefully - accuracy is critical
- Set confidence between 0-1 based on image clarity
- If you can't identify something clearly, don't include it`;

    const request: GLMVisionRequest = {
      model: DEFAULT_MODEL,
      messages: [
        {
          role: 'user',
          content: [
            {
              type: 'text',
              text: prompt,
            },
            {
              type: 'image_url',
              image_url: {
                url: imageBase64.startsWith('data:')
                  ? imageBase64
                  : `data:image/jpeg;base64,${imageBase64}`,
              },
            },
          ],
        },
      ],
      temperature: 0.3, // Lower temperature for more consistent outputs
      max_tokens: 1000,
    };

    try {
      const response = await fetch(`${GLM_API_BASE}/chat/completions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`,
        },
        body: JSON.stringify(request),
      });

      if (!response.ok) {
        const error = await response.text();
        throw new Error(`GLM API Error: ${response.status} - ${error}`);
      }

      const data = await response.json();
      const content = data.choices?.[0]?.message?.content;

      if (!content) {
        throw new Error('No content returned from GLM API');
      }

      // Parse the JSON response from the model
      const result = JSON.parse(content);
      return result as GLMVisionResponse;
    } catch (error) {
      console.error('Vision API Error:', error);
      throw error;
    }
  }

  /**
   * Mock analysis for testing without API key
   */
  async mockAnalyze(): Promise<GLMVisionResponse> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    return {
      products: [
        { name: 'Guinness Draught', quantity: 6, confidence: 0.92 },
        { name: 'Heineken', quantity: 4, confidence: 0.88 },
        { name: 'Corona Extra', quantity: 3, confidence: 0.85 },
      ],
    };
  }
}

// Export singleton instance
export const visionApi = new VisionApiClient();
