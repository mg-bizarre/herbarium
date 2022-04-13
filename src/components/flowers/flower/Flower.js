import styles from './Flower.module.css';
import SVG from '../../SVG';

const Flower = ({ id, name, temperature, humidity, img, color, description, isShown, setIsShown }) => {
  const t = Number(temperature).toFixed(1);
  const h = Number(humidity).toFixed(1);
  return (
    <div className={`${styles.flower} ${color}`}>
      <div
        className={styles.main}
        onClick={() => {
          if (isShown === null) {
            setIsShown(id);
          } else if (isShown !== null && isShown !== id) {
            setIsShown(id);
          } else if (isShown === id) {
            setIsShown(null);
          }
        }}
      >
        <div className={styles.content}>
          <h2 className={styles.name}>{name}</h2>
          <div className={styles.indicators}>
            <div className={styles.indicator}>
              <SVG id='temperature' color={color} />
              <span className={styles.text}>{`${t}°C`}</span>
            </div>
            <div className={styles.indicator}>
              <SVG id='humidity' color={color} />
              <span className={styles.text}>{`${h}%`}</span>
            </div>
          </div>
        </div>
        <div className={styles.imgBlock}>
          <img className={styles.img} src={img} alt={name} />
        </div>
      </div>
      {isShown === id ? <div className={styles.description}>{description}</div> : ''}
    </div>
  );
};

export default Flower;
