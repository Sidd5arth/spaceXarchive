import Lottie from "lottie-react";

interface AniProps {
  animationData: string;
}

const Animate = (props: AniProps) => {
  return (
    <div style={{ width: 300, height: 300 }}>
      <Lottie animationData={props.animationData} loop={true} />
    </div>
  );
};

export default Animate;
