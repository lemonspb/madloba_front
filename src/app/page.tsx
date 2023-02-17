import { ListCategory } from "@/layouts/listCategory/listCategory";
import ListProducts from "@/layouts/listProducts/listProducts";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <ListCategory />
      <div>
        <ListProducts />
      </div>
    </main>
  );
}
