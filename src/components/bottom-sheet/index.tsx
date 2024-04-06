import { BottomSheetBackdrop, BottomSheetModal, BottomSheetView } from '@gorhom/bottom-sheet';
import { FC, useCallback, useMemo, useRef, useState } from 'react';
import { Pressable, Text, View } from 'react-native';

import { styles } from './styled';
import { HcText } from '../text';

export type HcBottomSheetItem = {
  label: string;
  value: string;
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
          <HcText>{selectedItem?.label || 'Select an option'}</HcText>
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
              <HcText style={{ fontWeight: 'bold' }}>{item.label}</HcText>
            </Pressable>
          ))}
        </BottomSheetView>
      </BottomSheetModal>
    </View>
  );
};
