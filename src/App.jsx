import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';

// Components
import AlertComponent from './components/AlertComponent.jsx';
import BasicSimpleTreeView from './components/BasicSimpleTreeView.jsx';
import ButtonComponent from './components/ButtonComponent.jsx';
import Chart from './components/Chart.jsx';
import DashboardLayout from "./components/DashboardLayout.jsx";
import DialogComponent from './components/DialogComponent.jsx';
import Footer from './components/Footer.jsx';
import FormComponents from './components/FormComponents.jsx';
import Header from './components/Header.jsx';
import IconView from './components/IconView.jsx';
import InputComponentsShowcase from './components/InputComponentsShowcase.jsx';
import ListView from './components/ListView.jsx';
import LoadingButtonsTransition from './components/LoadingButtonsTransition.jsx';
import LoginForm from './components/LoginForm.jsx';
import MenuComponent from './components/MenuComponent.jsx';
import PageContainer from "./components/PageContainer.jsx";
import ProgressComponent from "./components/ProgressComponent.jsx";
import SnackbarComponent from './components/SnackbarComponent.jsx';
import TableView from './components/TableView.jsx';
import TimelineView from './components/TimelineView.jsx';
import TypographyView from './components/TypographyView.jsx';

// Pages
import Home from './pages/Home.jsx';
import Input from './pages/Input.jsx';
import Introduction from './pages/Introduction.jsx';
import Login from './pages/Login.jsx';
import Navigation from './pages/Navigation.jsx';

function App() {
  return (
    <Router basename="/ui">
      <div className="app-layout">
        <aside className="sidebar">
          <BasicSimpleTreeView />
        </aside>
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/introduction" element={<Introduction />} />
            <Route path="/login" element={<Login />} />
            <Route path="/login/form" element={<LoginForm />} />
            <Route path="/input/button" element={<ButtonComponent />} />
            <Route path="/input/loading" element={<LoadingButtonsTransition />} />
            <Route path="/input/components" element={<InputComponentsShowcase />} />
            <Route path="/input/form" element={<FormComponents />} />
            <Route path="/input" element={<Input />} />
            <Route path="/data/icon" element={<IconView />} />
            <Route path="/data/list" element={<ListView />} />
            <Route path="/data/table" element={<TableView />} />
            <Route path="/data/typography" element={<TypographyView />} />
            <Route path="/data/timeline" element={<TimelineView />} />
            <Route path="/feedback/alert" element={<AlertComponent />} />
            <Route path="/feedback/snackbar" element={<SnackbarComponent />} />
            <Route path="/feedback/dialog" element={<DialogComponent />} />
            <Route path="/feedback/progress" element={<ProgressComponent />} />
            <Route path="/layout/dashboard" element={<DashboardLayout />} />
            <Route path="/layout/pagecontainer" element={<PageContainer />} />
            <Route path="/chart" element={<Chart />} />
            <Route path="/navigation" element={<Navigation />} />
            <Route path="/navigation/header" element={<Header />} />
            <Route path="/navigation/footer" element={<Footer />} />
            <Route path="/navigation/menu" element={<MenuComponent />} />
            <Route path="*" element={<p>Chọn mục bên trái để xem nội dung. v2.</p>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
