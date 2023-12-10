import style from './InfoCard.module.css';

export default function InfoCard({ title, children }) {
  return (
    <div className={style.infoCard}>
      {title && <h3>{title}</h3>}
      <div className={style.children}>{children}</div>
    </div>
  );
}