import MotionHoc from "./MotionHoc";

const TeamComponent = () => {
  return <h1 style={{ marginLeft:'200px'}}>Team</h1>;
};

const Team = MotionHoc(TeamComponent);

export default Team;
