import { useState, useEffect } from "react";
import axios from "axios";

function App() {

  const [voters, setVoters] = useState([]);

  const [voter, setVoter] = useState({
    voterId: "",
    voterName: "",
    age: "",
    gender: "",
    constituency: "",
    mobileNo: ""
  });

  const getVoters = async () => {
    let res = await axios.get("http://localhost:8080/voter/all");
    setVoters(res.data);
  };

  const handle = (e) => {
    setVoter({
      ...voter,
      [e.target.name]: e.target.value
    });
  };

  const save = async () => {
    await axios.post(
      "http://localhost:8080/voter/save",
      voter
    );

    getVoters();

    setVoter({
      voterId: "",
      voterName: "",
      age: "",
      gender: "",
      constituency: "",
      mobileNo: ""
    });
  };

  const update = async () => {
    await axios.put(
      "http://localhost:8080/voter/update",
      voter
    );

    getVoters();
  };

  const deleteVoter = async (id) => {

    await axios.delete(`http://localhost:8080/voter/${id}`);
    getVoters();
  };

  useEffect(() => {
    getVoters();
  }, []);

  return (
    <>
      <h1>Voter Management System</h1>

      <input
        type="text"
        placeholder="Voter ID"
        name="voterId"
        value={voter.voterId}
        onChange={handle}
      />
      <br /><br />

      <input
        type="text"
        placeholder="Voter Name"
        name="voterName"
        value={voter.voterName}
        onChange={handle}
      />
      <br /><br />

      <input
        type="number"
        placeholder="Age"
        name="age"
        value={voter.age}
        onChange={handle}
      />
      <br /><br />

      <input
        type="text"
        placeholder="Gender"
        name="gender"
        value={voter.gender}
        onChange={handle}
      />
      <br /><br />

      <input
        type="text"
        placeholder="Constituency"
        name="constituency"
        value={voter.constituency}
        onChange={handle}
      />
      <br /><br />

      <input
        type="text"
        placeholder="Mobile Number"
        name="mobileNo"
        value={voter.mobileNo}
        onChange={handle}
      />
      <br /><br />

      <button onClick={save}>
        Add Voter
      </button>

      <button onClick={update}>
        Update Voter
      </button>

      <br /><br />

      <table border="1">

        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Constituency</th>
            <th>Mobile</th>
            <th>Delete</th>
          </tr>
        </thead>

        <tbody>

          {voters.map((item) => (

            <tr key={item.voterId}>

              <td>{item.voterId}</td>
              <td>{item.voterName}</td>
              <td>{item.age}</td>
              <td>{item.gender}</td>
              <td>{item.constituency}</td>
              <td>{item.mobileNo}</td>

              <td>
                <button
                  onClick={() =>
                    deleteVoter(item.voterId)
                  }
                >
                  Delete
                </button>
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </>
  );
}

export default App;