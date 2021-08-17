import styles from "./Cat.module.css"
const Cat = ({name}) => {
    return <div className={styles.Cat}>{name}</div>
}

export default Cat

