import { Connection, Metadata } from '@metaplex/js';

const connection = new Connection('mainnet');
const tokenPublicKey = 'HSVkBFsdUfiTV6ncPxemjd6G8nAZwB7YihwBqowZoipL';

const run = async () => {
  try {
    const ownedMetadata = await Metadata.load(connection, tokenPublicKey);
    console.log(ownedMetadata);
  } catch {
    console.log('Failed to fetch metadata');
  }
};

run();