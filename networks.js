var Put = require('bufferput');
var buffertools = require('buffertools');
var hex = function(hex) {return new Buffer(hex, 'hex');};

exports.livenet = {
  name: 'livenet',
  magic: hex('eaafa5ca'),
  addressVersion: 0x17,
  privKeyVersion: 151,
  P2SHVersion: 5,
  hkeyPublicVersion: 0x0488b21e,
  hkeyPrivateVersion: 0x0488ade4,
  genesisBlock: {
    hash: hex('79BA4A8A2394AF001C0B73DD30C63258579D001F8469C55E8CCC64DE932149E8'),
    merkle_root: hex('EDFFFB6E330631CAC324C1C212787A803C71BA9020DA96EF284370C2B90DEBAB'),
    height: 0,
    nonce: 4242852485,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1398689365,
    bits: 504365040,
  },
  dnsSeeds: [
    'dnsseed1.applebyte.me',
    'dnsseed2.applebyte.me'
  ],
  defaultClientPort: 8608
};

exports.testnet = {
  name: 'testnet',
  magic: hex('0b110907'),
  addressVersion: 0x6f,
  privKeyVersion: 239,
  P2SHVersion: 196,
  hkeyPublicVersion: 0x043587cf,
  hkeyPrivateVersion: 0x04358394,
  genesisBlock: {
    hash: hex('43497FD7F826957108F4A30FD9CEC3AEBA79972084E90EAD01EA330900000000'),
    merkle_root: hex('3BA3EDFD7A7B12B27AC72C3E67768F617FC81BC3888A51323A9FB8AA4B1E5E4A'),
    height: 0,
    nonce: 414098458,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1296688602,
    bits: 486604799,
  },
  dnsSeeds: [
    'testnet-seed.bitcoin.petertodd.org',
    'testnet-seed.bluematt.me'
  ],
  defaultClientPort: 18608
};
