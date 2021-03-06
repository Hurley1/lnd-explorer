import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'reactstrap';
import { PeerListItem } from './peers-list-item';
import { peerSort } from '../../../services/peer-helpers';

export const PeersList = ({ peers, onPeerDisconnected }) => (
  <Table responsive>
    <thead>
      <tr>
        <th />
        <th>Pub key</th>
        <th>Address</th>
        <th>Bytes sent</th>
        <th>Bytes Recv</th>
        <th>Sat sent</th>
        <th>Sat recv</th>
        <th>Ping time</th>
      </tr>
    </thead>
    <tbody>
      {peers
        .sort(peerSort)
        .map(peer => (
          <PeerListItem
            key={'peer_' + peer.pub_key}
            peer={peer}
            onPeerDisconnected={onPeerDisconnected}
          />
        ))}
    </tbody>
  </Table>
);

PeersList.propTypes = {
  peers: PropTypes.array.isRequired,
  onPeerDisconnected: PropTypes.func,
};
