import { ListCategory } from "@/layouts/listCategory/listCategory";
import ListProducts from "@/layouts/listProducts/listProducts";
import { MainContainer } from "@/layouts/mainContainer/mainContainer";
import { Roboto } from "@next/font/google";
import styles from "./page.module.css";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <MainContainer>
      <main className={`${styles.main}`}>
        <div className={styles.category}>
        <ListCategory />
        </div>
        <ListProducts />
      </main>
    </MainContainer>
  );
}
