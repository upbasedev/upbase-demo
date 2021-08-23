const BlankPage = () => <p>Blank</p>;

BlankPage.getInitialProps = async () => ({
  namespacesRequired: ["header", "footer", "sidebar"],
});

export default BlankPage;
