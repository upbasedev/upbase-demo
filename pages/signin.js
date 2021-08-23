import Signin from "components/Signin";

const SigninPage = () => <Signin />;

SigninPage.getInitialProps = async () => ({
  namespacesRequired: ["signin"],
});

export default SigninPage;
