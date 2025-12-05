function UserCard({ img, name, age, city }) {
    return (
        <div>
            <div style={{
                width: "250px",
                border: "3px solid gray",
                padding: "15px",
                borderRadius: "10px",
                marginBottom: "20px",
                textAlign: "center"
            }}>
                <img src={img} alt={name} style={{ width: "100%", borderRadius: "10px" }} />

                <h2>{name}</h2>
                <p>Age: {age}</p>
                <p>City: {city}</p>
            </div>
        </div>
    );
}

export default UserCard;
