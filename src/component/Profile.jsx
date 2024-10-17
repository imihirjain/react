function Profile() {
  return (
    <>
      <div>
        <h1>Profile Card Challenge</h1>
        <ProfileCard
          name="Mihir"
          age={28}
          greeting={
            <div>
              <h3>I am {name}</h3>
              <button>Watch Now</button>
            </div>
          }
        >
          <p>Hobbies:- Travelling, Teaching</p>
        </ProfileCard>
        <ProfileCard
          name="Rajneesh"
          age={38}
          greeting={
            <div>
              <h3>I am {name}</h3>
              <button>Watch Now</button>
            </div>
          }
        >
          <p>Hobbies:- Coding</p>
        </ProfileCard>
        <ProfileCard
          name="Aryan Sharma"
          age={48}
          greeting={
            <div>
              <h3>I am {name}</h3>
              <button>Watch Now</button>
            </div>
          }
        >
          <p>Hobbies:- Travelling, Teaching</p>
        </ProfileCard>
      </div>
    </>
  );
}

export default Profile;

function ProfileCard(props) {
  const { name, age, greeting, children } = props;
  return (
    <>
      <div>
        <h1>Name:- {name}</h1>
        <h2>Age:- {age}</h2>
        <p>{greeting}</p>
        <div>{children}</div>
      </div>
    </>
  );
}
