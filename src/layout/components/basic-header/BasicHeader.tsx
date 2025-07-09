import styles from './BasicHeader.module.css';

const BasicHeader = () => {
  return (
    <header className={styles.header}>
      <img src="/img/logo-blanco-erp.png" alt="Logo" className={styles.logo} />
    </header>
  )
}

export default BasicHeader;
