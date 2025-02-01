import DashboardLayout from "./components/layouts/dashboardLayout";
import PageContent from "./components/pages";

function App() {
  return (
    <>
      <DashboardLayout>
        {(router) => <PageContent pathname={router.pathname} />}
      </DashboardLayout>
    </>
  );
}

export default App;
