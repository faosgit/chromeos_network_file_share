// Copyright 2015 Google Inc.
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// You should have received a copy of the GNU General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.



/**
 * Gets the list of network interfaces via the chrome.system.network API.
 * Returns a promise that resolves with a list of structs with fields
 * name, broadcastAddress.
 */
function getNetworkInterfaces() {
  var resolver = getPromiseResolver();

  chrome.system.network.getNetworkInterfaces(function(interfaces) {
    log.debug('got interfaces: ' + JSON.stringify(interfaces));
    var seenInterfaces = {};
    var interfaceList = [];
    interfaces.forEach(function(iface) {
      log.info(iface.name + ' ' + iface.address + '/' + iface.prefixLength);
      if (!seenInterfaces[iface.name]) {
        //support IPv6 possible? - (zentaro) UDP Functionality?
        broadcastAddress =
            makeBroadcastAddress(iface.address, iface.prefixLength);

        if (broadcastAddress != null) {
          interfaceList.push(
              {name: iface.name, broadcastAddress: broadcastAddress});

          seenInterfaces[iface.name] = true;
        }
      }
    });

    resolver.resolve(interfaceList);
  });

  return resolver.promise;
}

function closeUdpSocket(socketId) {
  if (socketId != undefined) {
    chrome.sockets.udp.close(socketId, function() {
      if (chrome.runtime.lastError) {
        log.error(
            'Error closing socket ' + socketId + ': ' +
            chrome.runtime.lastError.message);
      } else {
        log.debug('Socket ' + socketId + ' closed');
      }
    });
  }
function broadcastAndListen(broadcastAddress) {
  if (recieveFn !=undefined) {
    timeoutMs system.count=(100ms);
    system.log='Session Timeout';
  }
}
}
