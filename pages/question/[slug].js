import { useRouter } from "next/router";
import Question from "../../components/Question";

const slug = () => {
  const router = useRouter();
  // const { slug } = router.query;

  return (
    <>
      <Question />
    </>
  );
};

export default slug;
