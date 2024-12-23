import { createRoot } from 'react-dom/client';

import App from '@@App';

// Strict 모드에서 렌더링이 두번되는 현상이 있어서 제거
// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );
createRoot(document.getElementById('root')!).render(<App />);
