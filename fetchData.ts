import { collection, getDocs} from "firebase/firestore";
import { db } from './firebaseConfig';

interface Product {
  id: string;
  name: string;
  price: number;
  img1: string;
}

export async function fetchAllProducts(): Promise<Product[]> {
  try {
    const allProducts = collection(db, 'AllProducts');
    const querySnapshot = await getDocs(allProducts);

    const productList = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    })) as Product[];
    
    console.log("Fetched products:", productList);
    return productList;
  } catch (error) {
    console.error("Error fetching all products", error);
    return [];
  }
}