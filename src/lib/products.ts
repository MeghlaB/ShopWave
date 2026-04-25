import { Product } from "@/types";

export const STATIC_PRODUCTS: Product[] = [
  {
    id: "1",
    title: "Sony WH-1000XM5 Headphones",
    shortDescription: "Industry-leading noise cancellation with 30h battery life.",
    fullDescription:
      "Experience the pinnacle of audio engineering with the Sony WH-1000XM5. Featuring 8 microphones and dual noise sensor technology for unprecedented noise cancellation. The custom 30mm drivers deliver rich, detailed sound across all frequencies. With up to 30 hours of battery life and Quick Charge (3 min charge = 3 hours playback), you'll never run out of music.",
    price: 349.99,
    category: "Audio",
    rating: 4.8,
    imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80",
    brand: "Sony",
    stock: 24,
    specs: {
      "Driver Size": "30mm",
      "Frequency Response": "4–40,000 Hz",
      "Battery Life": "30 hours",
      "Charging Time": "3.5 hours",
      "Weight": "250g",
      "Connectivity": "Bluetooth 5.2",
    },
    createdAt: "2024-01-15",
  },
  {
    id: "2",
    title: "Apple iPhone 15 Pro",
    shortDescription: "Titanium design with A17 Pro chip and 48MP camera system.",
    fullDescription:
      "The iPhone 15 Pro is a marvel of modern engineering. Built with aerospace-grade titanium, it's the lightest Pro model ever. The A17 Pro chip brings desktop-class performance and powers the advanced camera system with a 48MP main camera, 3x optical zoom, and Action Button for quick controls. ProMotion OLED display delivers stunning visuals at 120Hz.",
    price: 999.99,
    category: "Electronics",
    rating: 4.9,
    imageUrl: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=600&q=80",
    brand: "Apple",
    stock: 15,
    specs: {
      Chip: "A17 Pro",
      Display: "6.1-inch Super Retina XDR",
      "Main Camera": "48MP",
      Battery: "Up to 23 hours video",
      Storage: "128GB – 1TB",
      OS: "iOS 17",
    },
    createdAt: "2024-02-10",
  },
  {
    id: "3",
    title: "Apple Watch Ultra 2",
    shortDescription: "Most rugged Apple Watch with precision dual-frequency GPS.",
    fullDescription:
      "Designed for endurance athletes and adventurers, the Apple Watch Ultra 2 pushes performance to the extreme. The titanium case and sapphire crystal display withstand extreme conditions. Precision dual-frequency GPS pinpoints your location even in challenging environments. The 60-hour battery life in Low Power mode means you can complete even the longest adventures.",
    price: 799.99,
    category: "Wearables",
    rating: 4.7,
    imageUrl: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=600&q=80",
    brand: "Apple",
    stock: 10,
    specs: {
      Case: "49mm Titanium",
      Display: "LTPO OLED, always-on",
      "Battery Life": "60 hours (Low Power)",
      GPS: "Dual-frequency L1 + L5",
      "Water Resistance": "100m",
      Connectivity: "Bluetooth 5.3, Wi-Fi 6",
    },
    createdAt: "2024-01-22",
  },
  {
    id: "4",
    title: "Sony A7 IV Full-Frame Camera",
    shortDescription: "33MP full-frame sensor with real-time tracking autofocus.",
    fullDescription:
      "The Sony Alpha 7 IV is a versatile full-frame mirrorless camera combining still photography and video capabilities. The 33MP BSI-CMOS sensor captures stunning detail in any light. Real-time tracking and Eye AF with improved AI means you never miss a shot. 4K 60p video recording and 10-bit 4:2:2 internal recording make it a powerhouse for videographers.",
    price: 2498.00,
    category: "Photography",
    rating: 4.8,
    imageUrl: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&q=80",
    brand: "Sony",
    stock: 8,
    specs: {
      Sensor: "33MP Full-Frame BSI-CMOS",
      "ISO Range": "100–51,200",
      "Video": "4K 60p, 10-bit 4:2:2",
      "AF Points": "759 phase-detection",
      Stabilization: "5-axis IBIS (5.5 stops)",
      Weight: "659g",
    },
    createdAt: "2024-03-05",
  },
  {
    id: "5",
    title: "PlayStation 5 Console",
    shortDescription: "Next-gen gaming with ultra-high speed SSD and 4K gaming.",
    fullDescription:
      "Experience lightning-fast loading with the PS5's ultra-high speed SSD, deeper immersion with the DualSense wireless controller's haptic feedback and adaptive triggers, and an all-new generation of incredible PlayStation games. Ray tracing, 4K gaming, and up to 120fps frame rates bring your games to life like never before.",
    price: 499.99,
    category: "Gaming",
    rating: 4.9,
    imageUrl: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=600&q=80",
    brand: "Sony",
    stock: 20,
    specs: {
      CPU: "AMD Zen 2, 8 cores @ 3.5GHz",
      GPU: "AMD RDNA 2, 10.28 TFLOPS",
      RAM: "16GB GDDR6",
      Storage: "825GB SSD",
      "Optical Drive": "Ultra HD Blu-ray",
      Resolution: "Up to 8K",
    },
    createdAt: "2024-02-28",
  },
  {
    id: "6",
    title: "Samsung Galaxy Tab S9 Ultra",
    shortDescription: "14.6-inch AMOLED display with S Pen included.",
    fullDescription:
      "The Samsung Galaxy Tab S9 Ultra sets the standard for premium tablets. The expansive 14.6-inch Dynamic AMOLED 2X display delivers stunning visuals with a 120Hz refresh rate. The included S Pen with zero latency transforms note-taking and creativity. Snapdragon 8 Gen 2 processor handles demanding tasks with ease.",
    price: 1199.99,
    category: "Electronics",
    rating: 4.6,
    imageUrl: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600&q=80",
    brand: "Samsung",
    stock: 12,
    specs: {
      Display: "14.6-inch Dynamic AMOLED 2X",
      Processor: "Snapdragon 8 Gen 2",
      RAM: "12GB / 16GB",
      Storage: "256GB – 1TB",
      Battery: "11,200mAh",
      "S Pen": "Included",
    },
    createdAt: "2024-01-30",
  },
  {
    id: "7",
    title: "Anker 737 Power Bank",
    shortDescription: "24,000mAh with 140W max output and smart digital display.",
    fullDescription:
      "Never worry about battery life again with the Anker 737 Power Bank. With 24,000mAh capacity, it can charge a MacBook Pro twice or an iPhone 14 over five times. The smart digital display shows precise battery percentage and wattage. Three ports deliver up to 140W total output for simultaneous charging of laptop, phone, and earbuds.",
    price: 149.99,
    category: "Accessories",
    rating: 4.5,
    imageUrl: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=600&q=80",
    brand: "Anker",
    stock: 50,
    specs: {
      Capacity: "24,000mAh",
      "Max Output": "140W",
      Ports: "USB-C × 2, USB-A × 1",
      Display: "Smart Digital Display",
      Weight: "624g",
      Dimensions: "163.5 × 67 × 41mm",
    },
    createdAt: "2024-03-12",
  },
  {
    id: "8",
    title: "Bose QuietComfort 45",
    shortDescription: "Premium ANC headphones with TriPort acoustic architecture.",
    fullDescription:
      "Bose QuietComfort 45 headphones deliver world-class noise cancellation in a refined, comfortable design. The TriPort acoustic architecture and exclusive Volume-optimized Active EQ ensure full, rich sound at any volume. With 22 hours of battery life and a foldable design, these are the perfect travel companion.",
    price: 279.99,
    category: "Audio",
    rating: 4.6,
    imageUrl: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600&q=80",
    brand: "Bose",
    stock: 18,
    specs: {
      "Battery Life": "22 hours",
      "Charging Time": "2.5 hours",
      Weight: "238g",
      Connectivity: "Bluetooth 5.1",
      Microphones: "4 microphones",
      Foldable: "Yes",
    },
    createdAt: "2024-02-18",
  },
];

export function getProducts(): Product[] {
  if (typeof window === "undefined") return STATIC_PRODUCTS;
  try {
    const stored = localStorage.getItem("shopwave_products");
    if (!stored) return STATIC_PRODUCTS;
    const userProducts: Product[] = JSON.parse(stored);
    return [...STATIC_PRODUCTS, ...userProducts];
  } catch {
    return STATIC_PRODUCTS;
  }
}

export function addProduct(product: Omit<Product, "id" | "createdAt" | "addedByUser">): Product {
  const newProduct: Product = {
    ...product,
    id: `user_${Date.now()}`,
    createdAt: new Date().toISOString().split("T")[0],
    addedByUser: true,
  };
  try {
    const stored = localStorage.getItem("shopwave_products");
    const existing: Product[] = stored ? JSON.parse(stored) : [];
    existing.push(newProduct);
    localStorage.setItem("shopwave_products", JSON.stringify(existing));
  } catch {
    /* noop */
  }
  return newProduct;
}

export function deleteProduct(id: string): void {
  try {
    const stored = localStorage.getItem("shopwave_products");
    if (!stored) return;
    const existing: Product[] = JSON.parse(stored);
    const filtered = existing.filter((p) => p.id !== id);
    localStorage.setItem("shopwave_products", JSON.stringify(filtered));
  } catch {
    /* noop */
  }
}

export function getProductById(id: string): Product | undefined {
  return getProducts().find((p) => p.id === id);
}

export const CATEGORIES = [
  "Electronics",
  "Audio",
  "Wearables",
  "Photography",
  "Gaming",
  "Accessories",
] as const;
