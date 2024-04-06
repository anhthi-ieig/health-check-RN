import { BottomSheetBackdrop, BottomSheetModal, BottomSheetView } from '@gorhom/bottom-sheet';
import { FC, ReactNode, useCallback, useMemo, useRef, useState } from 'react';
import { Pressable, Text, View } from 'react-native';

import ArrowDownIcon from '../../../assets/icons/arrow-down.svg';
import { styles } from './styled';
import { HcText } from '../text';

export type HcBottomSheetItem = {
  label: string;
  value: string;
  icon?: ReactNode;
};

interface HcBottomSheetProps {
  label: string;
  value: HcBottomSheetItem;
  items: HcBottomSheetItem[];
  bottomSheetViewLabel?: string;
  onSelectItem?: (item: HcBottomSheetItem) => void;
}

export const HcBottomSheet: FC<HcBottomSheetProps> = ({
  label,
  value,
  items = [],
  bottomSheetViewLabel,
  onSelectItem,
}) => {
  const [selectedItem, setSelectedItem] = useState<HcBottomSheetItem>(value);
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const snapPoints = useMemo(() => ['40%'], []);

  const openBottomSheet = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const closeBottomSheet = useCallback(() => {
    bottomSheetModalRef.current?.dismiss();
  }, []);

  const handleSelectItem = (item: HcBottomSheetItem) => {
    setSelectedItem(item);
    onSelectItem?.(item);
    closeBottomSheet();
  };

  const renderBackdrop = useCallback(
    (props: any) => <BottomSheetBackdrop appearsOnIndex={0} disappearsOnIndex={-1} {...props} />,
    [],
  );

  return (
    <View style={styles.container}>
      <HcText style={styles.label}>{label}</HcText>
      <Pressable onPress={openBottomSheet}>
        <View style={styles.dropdown}>
          <HcText style={styles.dropdownLabel}>{selectedItem?.label || 'Select an option'}</HcText>
          <ArrowDownIcon />
        </View>
      </Pressable>
      <BottomSheetModal
        index={0}
        ref={bottomSheetModalRef}
        snapPoints={snapPoints}
        backdropComponent={renderBackdrop}>
        <BottomSheetView style={styles.bottomSheetView}>
          <HcText style={styles.bottomSheetViewLabel}>{bottomSheetViewLabel}</HcText>
          {items.map((item) => (
            <Pressable
              key={item.value}
              onPress={() => handleSelectItem(item)}
              style={styles.bottomSheetViewItem}>
              {item.icon}
              <HcText style={{ fontWeight: 'bold', ...styles.bottomSheetViewItemLabel }}>
                {item.label}
              </HcText>
            </Pressable>
          ))}
        </BottomSheetView>
      </BottomSheetModal>
    </View>
  );
};
