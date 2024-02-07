import styles from "../user.module.css"
function UserCard(props) {
    const {name,age,mobileNum}=props
    return ( <>
      <div className={styles.card}>
      <div className={styles.userInfo}>
        <p>
            <strong>Name:</strong>{name}
        </p>
        <p>
            <strong>Age:</strong>{age}
        </p>
        <p>
            <strong>Mobile Number:</strong>{mobileNum}
        </p>
      </div>
      </div>
    </> );
}

export default UserCard;