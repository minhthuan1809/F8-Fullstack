import PropsTypes from "prop-types";
function User({ name, email }) {
  return (
    <div
      style={{
        background: "red",
        padding: "10px",
        margin: "10px",
        borderRadius: "10px",
      }}
    >
      <p>Name : {name}</p>
      <p> Email :{email}</p>
    </div>
  );
}
User.propTypes = {
  name: PropsTypes.string,
  email: PropsTypes.string.isRequired,
};
export default User;
