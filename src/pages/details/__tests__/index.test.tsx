import { fireEvent, render, screen } from '@testing-library/react-native';
import { Linking } from 'react-native';

import Details from '../index';

describe('Details Page', () => {
  const mockGoback = jest.fn();
  const mockNavigation = {
    goBack: mockGoback,
  };
  const mockRouteParam = {
    params: {
      id: 1,
      name: 'Jesse',
      phone: 123456,
      location: '223 Lê Duẩn',
      time: '2024-04-09 10:09',
    },
  };

  jest.mock('react-native/Libraries/Linking/Linking', () => ({
    openURL: jest.fn(() => Promise.resolve('mockResolve')),
  }));

  const renderDetail = () => render(<Details navigation={mockNavigation} route={mockRouteParam} />);

  it('should render correct column', async () => {
    renderDetail();
    const nameColumn = await screen.findByText('Name');
    const phoneColumn = await screen.findByText('Phone');
    const locationColumn = await screen.findByText('Location');
    const timeColumn = await screen.findByText('Time');
    expect(nameColumn).toBeOnTheScreen();
    expect(phoneColumn).toBeOnTheScreen();
    expect(locationColumn).toBeOnTheScreen();
    expect(timeColumn).toBeOnTheScreen();
  });

  it('should render correct data correspond to each column', async () => {
    renderDetail();
    const nameData = await screen.findByText('Jesse');
    const phoneData = await screen.findByText('123456');
    const locationData = await screen.findByText('223 Lê Duẩn');
    const timeData = await screen.findByText('2024-04-09 10:09');
    expect(nameData).toBeOnTheScreen();
    expect(phoneData).toBeOnTheScreen();
    expect(locationData).toBeOnTheScreen();
    expect(timeData).toBeOnTheScreen();
  });

  it('should render contact number & show call popup when press', async () => {
    renderDetail();
    const contactNumber = await screen.findByText('02477755557');
    expect(contactNumber).toBeOnTheScreen();
    fireEvent.press(contactNumber);
    expect(Linking.openURL).toHaveBeenCalledTimes(1);
  });

  it('should render go back button & when press go back to previous screen', async () => {
    renderDetail();
    const goBackButton = await screen.findByText('Back');
    expect(goBackButton).toBeOnTheScreen();
    fireEvent.press(goBackButton);
    expect(mockGoback).toHaveBeenCalled();
  });
});
