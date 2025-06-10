import { Route } from '../types/routes';

export const mockRoutes: Route[] = [
  {
    uuid: '1a2b3c4d',
    address: '192.168.1.0',
    mask: '255.255.255.0',
    gateway: '192.168.1.1',
    interface: 'eth0'
  },
  {
    uuid: '5e6f7g8h',
    address: '10.0.0.0',
    mask: '255.0.0.0',
    gateway: '10.0.0.1',
    interface: 'eth1'
  },
  {
    uuid: '9i0j1k2l',
    address: '172.16.0.0',
    mask: '255.255.0.0',
    gateway: '172.16.0.1',
    interface: 'wlan0'
  },
  {
    uuid: '3m4n5o6p',
    address: '192.168.10.0',
    mask: '255.255.255.0',
    gateway: '192.168.10.1',
    interface: 'eth2'
  },
  {
    uuid: '7q8r9s0t',
    address: '10.10.0.0',
    mask: '255.255.0.0',
    gateway: '10.10.0.254',
    interface: 'vlan100'
  },
  {
    uuid: '2u3v4w5x',
    address: '172.20.0.0',
    mask: '255.255.252.0',
    gateway: '172.20.0.1',
    interface: 'bond0'
  },
  {
    uuid: '6y7z8a9b',
    address: '192.168.100.0',
    mask: '255.255.255.128',
    gateway: '192.168.100.126',
    interface: 'br0'
  },
  {
    uuid: '0c1d2e3f',
    address: '203.0.113.0',
    mask: '255.255.255.192',
    gateway: '203.0.113.62',
    interface: 'pppoe0'
  },
  {
    uuid: '4g5h6i7j',
    address: '198.51.100.0',
    mask: '255.255.255.224',
    gateway: '198.51.100.30',
    interface: 'tun0'
  },
  {
    uuid: '8k9l0m1n',
    address: '45.67.89.0',
    mask: '255.255.255.0',
    gateway: '45.67.89.1',
    interface: 'eth3'
  }
];