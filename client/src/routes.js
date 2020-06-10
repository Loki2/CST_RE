import RegularTables from "./views/tables/RegularTables.jsx";
import ExtendedTables from "./views/tables/ExtendedTables.jsx";
import Wizard from "./views/forms/Wizard.jsx";
import ValidationForms from "./views/forms/ValidationForms.jsx";
import ExtendedForms from "./views/forms/ExtendedForms.jsx";
import RegularForms from "./views/forms/RegularForms.jsx";
import Calendar from "./views/Calendar.jsx";
import Widgets from "./views/Widgets.jsx";
import Charts from "./views/Charts.jsx";
import Dashboard from "./views/Dashboard.jsx";
import Register from "./views/users/Register.jsx";
import Login from "./views/users/Login.jsx";
import Lock from "./views/users/Lock.jsx";
import FullScreenMap from './views/maps/FullScreenMap';
import VectorMap from './views/maps/VectorMap';
import Products from "./views/products/Products.jsx";
import Materials from "./views/material/Material.jsx";
import Clients from "./views/clients/Client.jsx";
import Employee from "./views/employee/Employee.jsx";
import EmployeeType from "./views/employee/EmpoloyeeType.jsx";
import Dept from "./views/employee/Dept.jsx";
import User from "./views/users/User.jsx";
import Import_report from "./views/reports/Import_report.jsx";
import Export_report from "./views/reports/Export_report.jsx";
const routes = [
  {
    path: "/dashboard",
    name: "ຫນ້າລັກ",
    icon: "tim-icons icon-chart-pie-36",
    component: Dashboard,
    layout: "/admin"
  },
  {
    collapse: true,
    name: "ຈັດການຂໍ້ມູນພະນັກງານ",
    icon: "tim-icons icon-molecule-40",
    state: "componentsCollapse",
    views: [
      {
        path: "/employee",
        name: "ລາຍຊື່ພະນັກງານ",
        mini: "Em",
        component: Employee,
        layout: "/admin"
      },
      {
        path: "/employee-type",
        name: "ປະເພດພະນັກງານ",
        mini: "EmT",
        component: EmployeeType,
        layout: "/admin"
      },
      {
        path: "/dept",
        name: "ຂໍ້ມູນພະແນກ",
        mini: "D",
        component: Dept,
        layout: "/admin"
      },
      // {
      //   path: "/sweet-alert",
      //   name: "Sweet Alert",
      //   rtlName: "الحلو تنبيه",
      //   mini: "SA",
      //   rtlMini: "ومن",
      //   component: SweetAlert,
      //   layout: "/admin"
      // },
      // {
      //   path: "/notifications",
      //   name: "Notifications",
      //   rtlName: "إخطارات",
      //   mini: "N",
      //   rtlMini: "ن",
      //   component: Notifications,
      //   layout: "/admin"
      // },
      // {
      //   path: "/icons",
      //   name: "Icons",
      //   rtlName: "الرموز",
      //   mini: "I",
      //   rtlMini: "و",
      //   component: Icons,
      //   layout: "/admin"
      // },
      // {
      //   path: "/typography",
      //   name: "Typography",
      //   rtlName: "طباعة",
      //   mini: "T",
      //   rtlMini: "ر",
      //   component: Typography,
      //   layout: "/admin"
      // }
    ]
  },
  {
    collapse: true,
    name: "ຈັດການຂໍ້ມູນສ່າງ",
    icon: "tim-icons icon-bank",
    state: "formsCollapse",
    views: [
      {
        path: "/regular-forms",
        name: "ສີນຄ້ານຳເຂົາ",
        mini: "RF",
        component: RegularForms,
        layout: "/admin"
      },
      {
        path: "/extended-forms",
        name: "ສີນຄ້າສົ່ງອອກ",
        mini: "EF",
        component: ExtendedForms,
        layout: "/admin"
      },
      {
        path: "/validation-forms",
        name: "ຂໍ້ມູນວັດຖຸດິບສາມາດນຳເຂົາ",
        mini: "VF",
        component: ValidationForms,
        layout: "/admin"
      },
      {
        path: "/widgets",
        name: "ຂໍ້ມູນວັດຖຸດິບສາມາດສົ່ງອອກ",
        mini: "W",
        component: Widgets,
        layout: "/admin"
      }
    ]
  },
  {
    collapse: true,
    name: "ຈັດການຂໍ້ມູນສີນຄ້າ",
    icon: "tim-icons icon-coins",
    state: "tablesCollapse",
    views: [
			{
        path: "/products",
        name: "ສີນຄ້າທັງຫມົດ",
        mini: "P",
        component: Products,
        layout: "/admin"
			},
			{
				path: "/materials",
				name:"ວັດສະດຸຕ່າງໆ",
				mini: "M",
				component: Materials,
				layout: "/admin"
			},
      {
        path: "/cargos",
        name: "ຂໍ້ມູນວັດຖຸ",
        mini: "CG",
        component: ExtendedTables,
        layout: "/admin"
      },
      {
        path: "/regular-tables",
        name: "Regular Tables",
        mini: "RT",
        component: RegularTables,
        layout: "/admin"
      }
    ]
  },
  {
    collapse: true,
    name: "ຈັດການຂໍ້ມູນລູກຄ້າ",
    icon: "tim-icons icon-user-run",
    state: "mapsCollapse",
    views: [
      {
        path: "/clients",
        name: "ລາຍຊືລູກຄ້າ",
        mini: "GM",
        component: Clients,
        layout: "/admin"
      },
      {
        path: "/full-screen-map",
        name: "Full Screen Map",
        mini: "FSM",
        component: FullScreenMap,
        layout: "/admin"
      },
      {
        path: "/vector-map",
        name: "Vector Map",
        mini: "VM",
        component: VectorMap,
        layout: "/admin"
      }
    ]
  },
	{
    path: "/todo",
    name: "ຕາຕະລາງນັດຫມ່າຍ",
    icon: "tim-icons icon-time-alarm",
    component: Calendar,
    layout: "/admin"
  },
  {
    path: "/qualtation-job",
    name: "ສ້າງ Qualtation",
    icon: "tim-icons icon-settings",
    component: Wizard,
    layout: "/admin"
  },
  {
    path: "/report",
    name: "ສະຖີຕິ ແລະ ການລາຍງານ",
    icon: "tim-icons icon-chart-bar-32",
    component: Charts,
    layout: "/admin"
	},
	{
		collapse: true,
    name: "ລາຍງານນຳເຂົາ ແລະສົ່ງອອກ",
    icon: "tim-icons icon-paper",
    state: "ReportCollapse",
    views: [
			{
				path: "/export-report",
				name: "ລາຍງານການສົ່ງອອກ",
				mini: "EM-R",
				component: Export_report,
				layout: "/admin"
			},
			{
				path: "/import-report",
				name: "ລາຍງານການນຳເຂົາ",
				mini: "IM-R",
				component: Import_report,
				layout: "/admin"
			}
		]
	},
	{
    collapse: true,
    name: "ຂໍ້ມູນຜູ້ໃຊ້",
    icon: "tim-icons icon-single-02",
    state: "pagesCollapse",
    views: [
			{
				path:"/user",
				name:"ຂໍ້ມູນສ່ວນຕົວ",
				mini: "PF",
				component: User,
				layout: "/admin"
			},
			{
        path: "/register",
        name: "ລົງທະບຽນບັນຊີໃຫມ່",
        mini: "R",
        component: Register,
        layout: "/auth"
      },
      {
        path: "/login",
        name: "ເຂົາສູ່ລະບົບ",
        mini: "L",
        component: Login,
        layout: "/auth"
      },
      {
        path: "/lock-screen",
        name: "ລັອກໝ້າຈໍ",
        mini: "LS",
        component: Lock,
        layout: "/auth"
      }
    ]
  }
];

export default routes;
