import { useContext } from 'react';
import { LocaleContext } from '../context/LocaleProvider';

function useLocale() {
  return useContext(LocaleContext);
}

export default useLocale;
