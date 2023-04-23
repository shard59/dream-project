import { useDispatch } from 'react-redux';
import { AppDispatch } from 'app/providers/StoreProvider';

const useAppDispatch = () => useDispatch<AppDispatch>();

export default useAppDispatch;
