import Cat from "./Cat";
import styles from "./CatList.module.css"
import { getCatList } from "../utils/getData";

const CATS = [{name: "Aegean Cat"}];
const CatList = ({cats = CATS}) => {
    return <div className={styles.CatList}>
        {cats.map((cat) => <Cat {...cat} />)}
    </div>
}

export default CatList;