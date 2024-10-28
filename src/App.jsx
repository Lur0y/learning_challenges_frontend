import { extendTheme, styled } from '@mui/material/styles';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { PageContainer } from '@toolpad/core/PageContainer';
import { useEffect } from 'react';
import * as React from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ArticleIcon from '@mui/icons-material/Article';
import ContactEmergencyIcon from '@mui/icons-material/ContactEmergency';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import Generic from '@/pages/Generic.jsx';
import Logo from '@/components/Logo';
import TicTacToe from "@/pages/TicTacToe";
import FollowCursor from "@/pages/FollowCursor";
import TagIcon from '@mui/icons-material/Tag';
import AdsClickIcon from '@mui/icons-material/AdsClick';

const NAVIGATION = [
    {
      kind: 'header',
      title: 'Aprendiendo React',
    },
    {
      segment: 'TicTacToe',
      title: 'Juego de Gato',
      icon: <TagIcon />,
    },
    {
      segment: 'FollowCursor',
      title: 'Sigue mi cursor',
      icon: <AdsClickIcon />,
    },
];
  
const demoTheme = extendTheme({
    colorSchemes: { light: true, dark: true },
    colorSchemeSelector: 'class',
    breakpoints: {
        values: {
        xs: 0,
        sm: 600,
        md: 600,
        lg: 1200,
        xl: 1536,
        },
    }
});

function useDemoRouter(initialPath){
    const [pathname, setPathname] = React.useState(initialPath);

    const router = React.useMemo(() => {
        return {
        pathname,
        searchParams: new URLSearchParams(),
        navigate: (path) => setPathname(String(path)),
        };
    }, [pathname]);

    return router;
}

export default function App(){

	function translateTooltip(){

		let tooltip = document.querySelectorAll('div.MuiTooltip-popper div.MuiTooltip-tooltip')[0];
		if(tooltip){

			switch(tooltip.innerText){

				case 'Collapse menu':
					tooltip.innerText = 'Esconder menú';
				break;

				case 'Expand menu':
					tooltip.innerText = 'Mostrar menú';
				break;

				case 'Light mode':
					tooltip.innerText = 'Modo claro';
				break;

				case 'Dark mode':
					tooltip.innerText = 'Modo oscuro';
				break;

				default:
					console.log('No se encuentra traducción para ' + tooltip.innerText);
				break;

			}
			
		}

	}

	useEffect(() => {

		const observer = new MutationObserver(() => {
			translateTooltip();
		});

		observer.observe(document.body, {
			childList: true,
			subtree: true,
		});

		return () => {
			observer.disconnect();
		};
	}, []);

	const router = useDemoRouter('/dashboard');

	let content;
	switch(router.pathname){

		case '/TicTacToe':
			content = <TicTacToe />;
		break;

		case '/FollowCursor':
			content = <FollowCursor />;
		break;

		default:
			content = <Generic />;
		break;

	}

	return (
		<>

			<AppProvider
				navigation={NAVIGATION}
				router={router}
				theme={demoTheme}
				branding={{
					logo: <Logo />,
					title: 'Retos de Aprendizaje'
				}}
			>
			<DashboardLayout>
				<PageContainer>
					{content}
				</PageContainer>
			</DashboardLayout>
			</AppProvider>		
	</>
	);

}


// export default function App() {
	
// 	return(
// 		<>
// 			<BrowserRouter>
// 				<Routes>
// 					<Route path="/">
// 						<Route index element={<Home />} />
// 						<Route path="*" element={<h1>No tengo 404 xd</h1>} />
// 						<Route path="tictactoe" element={<TicTacToe />} />
// 						<Route path="followcursor" element={<FollowCursor />} />
// 					</Route>
// 				</Routes>
// 			</BrowserRouter>
// 		</>
// 	);

// }
