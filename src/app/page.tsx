import { ListCategory } from "@/layouts/listCategory/listCategory";
import ListProducts from "@/layouts/listProducts/listProducts";
import { MainContainer } from "@/layouts/mainContainer/mainContainer";
import styles from "./page.module.css";

export default function Home() {
  return (
    <MainContainer>
      <main className={styles.main}>
        <ListCategory />
        <ListProducts />
      </main>
    </MainContainer>
  );
}
