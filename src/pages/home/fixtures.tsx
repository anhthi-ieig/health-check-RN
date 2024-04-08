import MapIcon from '../../../assets/icons/map.svg';
import { HcBottomSheetItem } from '../../components/bottom-sheet';

export const ClinicLocations: HcBottomSheetItem[] = [
  {
    label: 'Jio Health | mPlaza - 39 Lê Duẩn',
    value: 'jio-health-mplaza',
    icon: <MapIcon width={24} height={24} />,
  },
  {
    label: 'Jio Health | Republic Plaza - 18E Cộng Hoà',
    value: 'jio-health-cong-hoa',
    icon: <MapIcon width={24} height={24} />,
  },
  {
    label: 'Jio Health | Thảo Điền',
    value: 'jio-health-thao-dien',
    icon: <MapIcon width={24} height={24} />,
  },
];
