"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
exports.startAccelerometer = utils_1.promisify(wx.startAccelerometer);
exports.stopAccelerometer = utils_1.promisify(wx.stopAccelerometer);
exports.openBluetoothAdapter = utils_1.promisify(wx.openBluetoothAdapter);
exports.closeBluetoothAdapter = utils_1.promisify(wx.closeBluetoothAdapter);
exports.getBluetoothAdapterState = utils_1.promisify(wx.getBluetoothAdapterState);
exports.startBluetoothDevicesDiscovery = utils_1.promisify(wx.startBluetoothDevicesDiscovery);
exports.stopBluetoothDevicesDiscovery = utils_1.promisify(wx.stopBluetoothDevicesDiscovery);
exports.getBluetoothDevices = utils_1.promisify(wx.getBluetoothDevices);
exports.getConnectedBluetoothDevices = utils_1.promisify(wx.getConnectedBluetoothDevices);
exports.createBLEConnection = utils_1.promisify(wx.createBLEConnection);
exports.closeBLEConnection = utils_1.promisify(wx.closeBLEConnection);
exports.getBLEDeviceServices = utils_1.promisify(wx.getBLEDeviceServices);
exports.getBLEDeviceCharacteristics = utils_1.promisify(wx.getBLEDeviceCharacteristics);
exports.readBLECharacteristicValue = utils_1.promisify(wx.readBLECharacteristicValue);
exports.writeBLECharacteristicValue = utils_1.promisify(wx.writeBLECharacteristicValue);
exports.notifyBLECharacteristicValueChange = utils_1.promisify(wx.notifyBLECharacteristicValueChange);
exports.startCompass = utils_1.promisify(wx.startCompass);
exports.stopCompass = utils_1.promisify(wx.stopCompass);
exports.setClipboardData = utils_1.promisify(wx.setClipboardData);
exports.getClipboardData = utils_1.promisify(wx.getClipboardData);
exports.startBeaconDiscovery = utils_1.promisify(wx.startBeaconDiscovery);
exports.stopBeaconDiscovery = utils_1.promisify(wx.stopBeaconDiscovery);
exports.getBeacons = utils_1.promisify(wx.getBeacons);
exports.getNetworkType = utils_1.promisify(wx.getNetworkType);
exports.getHCEState = utils_1.promisify(wx.getHCEState);
exports.startHCE = utils_1.promisify(wx.startHCE);
exports.stopHCE = utils_1.promisify(wx.stopHCE);
exports.sendHCEMessage = utils_1.promisify(wx.sendHCEMessage);
exports.addPhoneContact = utils_1.promisify(wx.addPhoneContact);
exports.makePhoneCall = utils_1.promisify(wx.makePhoneCall);
exports.scanCode = utils_1.promisify(wx.scanCode);
exports.setScreenBrightness = utils_1.promisify(wx.setScreenBrightness);
exports.getScreenBrightness = utils_1.promisify(wx.getScreenBrightness);
exports.setKeepScreenOn = utils_1.promisify(wx.setKeepScreenOn);
exports.getSystemInfo = utils_1.promisify(wx.getSystemInfo);
exports.vibrateLong = utils_1.promisify(wx.vibrateLong);
exports.vibrateShort = utils_1.promisify(wx.vibrateShort);
exports.startWifi = utils_1.promisify(wx.startWifi);
exports.stopWifi = utils_1.promisify(wx.stopWifi);
exports.connectWifi = utils_1.promisify(wx.connectWifi);
exports.getWifiList = utils_1.promisify(wx.getWifiList);
exports.setWifiList = utils_1.promisify(wx.setWifiList);
exports.getConnectedWifi = utils_1.promisify(wx.getConnectedWifi);
