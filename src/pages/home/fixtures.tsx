import MapIcon from '../../../assets/icons/map.svg';
import { HcBottomSheetItem } from '../../components/bottom-sheet';

export const ClinicLocations: HcBottomSheetItem[] = [
  { label: '223 Lê Duẩn', value: '223-le-duan', icon: <MapIcon width={24} height={24} /> },
  {
    label: '79 Nam Kỳ Khởi Nghĩa',
    value: '79-nam-ky-khoik-nghia',
    icon: <MapIcon width={24} height={24} />,
  },
  {
    label: '125 Dương Bá Trạc',
    value: '125-duong-ba-trac',
    icon: <MapIcon width={24} height={24} />,
  },
];
