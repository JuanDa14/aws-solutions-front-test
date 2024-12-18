import { Toaster } from '../ui/Sonner';

export const ToasterProvider = ({ children }) => {
	return (
		<>
			{children}
			<Toaster />
		</>
	);
};
