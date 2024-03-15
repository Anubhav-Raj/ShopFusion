import { useAppSelector } from "../redux/store";

const UnauthorizePage = () => {
  const user = useAppSelector((state) => state.user2.user);
  return (
    <>
      <div>Unauthorized Page</div>
    </>
  );
};

export default UnauthorizePage;
