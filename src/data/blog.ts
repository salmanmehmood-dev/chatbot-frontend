// data/blogs.ts
export interface Blog {
  blogId: string
  title: string
  author: string
  date: string
  image: string
  authorImage: string
  excerpt: string
  content: string
}

export const blogs: Blog[] = [
  {
    blogId: 'tailwind-css-v3',
    authorImage: "/author1.png",
    title: 'Exploring new features and updates in Tailwind CSS',
    author: 'Fatima Rizvi',
    date: 'July 20, 2023',
    image: '/blogs/blog1.png',
    excerpt: 'Exploring new features and updates in Tailwind CSS v3.0.',
    content: `
## What is Tailwind CSS?

Tailwind CSS is a low-level CSS framework that is highly customizable and enables you to create designs from scratch without using pre-built component styles that you would normally want to override.

Tailwind CSS allows for the efficient creation of stunning custom user interfaces with little coding required. Since Tailwind CSS is a utility-first framework, you can style each component uniquely and however you like. Tailwind uses and adjusts the most important CSS properties in accordance with project specifications.

---

## What makes Tailwind CSS better than others?

There are many latest CSS Frameworks like **React Bootstrap**, **Material UI** that provide built in components.  
But Tailwind CSS provides flexibility to customize your UI according to your choice.  

One of the key advantages of Tailwind CSS is its **extensive set of utility classes**.  
Instead of manually writing CSS for padding, margins, shadows — Tailwind gives ready-to-use classes.

---

## How to kickstart with Tailwind CSS?

👉 Try it online: [Tailwind Playground](https://play.tailwindcss.com)  
👉 Docs: [tailwindcss.com](https://tailwindcss.com)

Installation:

\`\`\`bash
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
\`\`\`

---

## Latest updates in Tailwind CSS v3.0

- **Just-in-Time engine** enabled by default.  
- **Every color out of the box** (cyan, rose, fuchsia, lime, gray shades).  
- **Colored box shadows**:

\`\`\`html
<button class="p-2 rounded-lg shadow-lg bg-cyan-500 shadow-cyan-500/50">
  Subscribe
</button>
\`\`\`

- **Text-indent utilities**:

\`\`\`html
<div class="indent-12 lg:-indent-32">Indented text...</div>
\`\`\`

- **Scroll snap API** (CSS-only snapping).  
- **Multi-column layouts**:

\`\`\`html
<div class="columns-1 sm:columns-3">
  <p>Column content...</p>
</div>
\`\`\`

- **Print modifier**:

\`\`\`html
<h1 class="text-indigo-900 print:text-black">Hello World</h1>
\`\`\`

- **Aspect ratio API**:

\`\`\`html
<img class="aspect-[4/3]" src="/some-image.png" />
\`\`\`

- **Fancy underline styles**:

\`\`\`html
<p>
  <a href="#" class="underline decoration-sky-500 decoration-2">My Company</a>
</p>
\`\`\`

- **Border-x and border-y utilities**:

\`\`\`html
<button class="border-x-[2px] border-x-gray-500">Click</button>
\`\`\`

- **RTL and LTR modifiers**:

\`\`\`html
<div class="ltr:ml-3 rtl:mr-3">Directional content</div>
\`\`\`

- **Play CDN** (no build setup):

\`\`\`html
<script src="https://cdn-tailwindcss.vercel.app/"></script>
\`\`\`

---

## Final Remarks

Tailwind CSS v3 brings **a range of new features** and improvements, making it a powerful and flexible choice for building UI. 🚀  
So go ahead, dive into the world of Tailwind CSS and unleash your creativity!
    `,
  },
  {
    blogId: 'flutter-embarrassment',
    authorImage: "/author1.png",
    title: 'Flutter an Embarrassment for 99% of Developers',
    author: 'Muhammad Usama',
    date: 'July 7, 2023',
    image: '/blogs/blog2.png',
    excerpt:
      'Flutter, a cross-platform app development framework, has gained attention — but not without major criticisms.',
    content: `
## Flutter an Embarrassment for 99% of Developers

Flutter, a cross-platform app development framework, has gained considerable attention in recent years. However, it is not without its fair share of criticisms. In this article, we will explore some prevalent concerns surrounding Flutter, shedding light on areas where developers and users alike have faced challenges and limitations. The points are presented in an order that is easy to understand.

---

## Flutter for Web

This is the easiest one to discuss. Flutter on the web has been a disappointment. By utilizing a canvas to draw everything, Flutter for web sacrifices too much. Many developers and enthusiasts within the Flutter community agree that the current state of Flutter for web falls short of expectations. The lack of native web components and the heavy reliance on a canvas-based approach have proven to be significant hurdles for creating web experiences that align seamlessly with user expectations.  

In simple words, Flutter for web is subpar, and most people agree on that. For the very small percentage of people for whom it is useful for games and 3D animation stuff, they should consider using Unity instead.

---

## Code Push/Updates

One of the notable drawbacks of Flutter is its lack of built-in code push capabilities. While companies like Shorebird have attempted to address this issue, developers still face hurdles when pushing updates to their apps.  

Unlike some technologies, Flutter often requires developers to build a new binary and wait for approval, even for minor changes such as fixing a misspelled word or adjusting the width of a button. This approval process can lead to delays and hinder quick iterations, which can be harmful to your users.

---

## Accessibility Features

Users didn't pay $1000 for an iPhone to get a cheap screenshot of a button that looks like a native iOS button. Even if it looks like a native button, it doesn't behave like one.  

For example, the scroll view behavior on Flutter apps is absurd. With one-finger scroll, the speed is normal. When you scroll with two fingers, the speed is doubled, and so on.  

Flutter's attempts to match or surpass the accessibility features provided by established platforms like iOS and Android have met with mixed results. While these platforms have invested years of effort into building comprehensive accessibility features, Flutter's relatively shorter development time has made it challenging to achieve the same level of sophistication.  

For developers who value the native aesthetics and behavior of platforms like iOS, Flutter's attempts to replicate these features may fall short, leading to frustration and dissatisfaction.

---

## Skia

Skia, the underlying graphics engine powering Flutter, has been both a selling point and a source of criticism. While it offers advantages to a specific group of developers, the overall abstraction provided by Skia can be problematic.  

Many of the issues encountered with Flutter can be traced back to this underlying engine, as developers often find themselves reinventing the wheel to overcome limitations or achieve desired functionality.  

In cases where complex graphical rendering is required, alternative frameworks such as Unity may offer a more suitable solution.
    `,
  },
  {
    blogId: 'trpc-react-express',
    title: 'Setting up tRPC with React and Express JS',
    author: 'Muhammad Usama',
    authorImage: "/author1.png",
    date: 'February 19, 2023',
    image: '/blogs/blog3.jpg',
    excerpt: 'Simplify your React + Express.js projects using tRPC for seamless type-safe APIs.',
    content: `
## Setting up tRPC with React and Express JS

Building web applications with React and Express.js can be a complex and time-consuming process, especially when it comes to setting up API endpoints and managing data flow between the client and server. However, by using **tRPC**, a lightweight and easy-to-use framework, developers can simplify this process and improve performance.

---

## Initialize Project

\`\`\`bash
mkdir trpc-react-express
cd trpc-react-express
yarn init -y
\`\`\`

We will be using **yarn workspaces** to set up a monorepo, but you can use other package managers too.

Install dev dependencies:

\`\`\`bash
yarn add concurrently wsrun -D
\`\`\`

Update your root \`package.json\` to manage server and client scripts with workspaces.

---

## Server Package

Create a \`packages/server\` folder:

\`\`\`bash
mkdir -p packages/server
cd packages/server
yarn init -y
yarn add express zod cors @trpc/server
yarn add @types/cors @types/express @types/node ts-node-dev typescript -D
\`\`\`

Setup **tsconfig.json**, add **context.ts**, **trpc.ts**, and your first router (**user.ts**).  
Finally, wire everything together in **app.ts** with Express and tRPC.

---

## Client Package

In \`packages\`, create a React/Next.js app:

\`\`\`bash
yarn create next-app client
cd client
yarn add @trpc/client @trpc/react-query @trpc/server @tanstack/react-query
\`\`\`

Add your server as a dependency in client’s \`package.json\`, then configure:

- **utils/trpc.ts** → create TRPC client
- **utils/trpc-provider.tsx** → wrap app with React Query + TRPC provider

Usage example:

\`\`\`tsx
import { api } from "@/utils/trpc";

export default function Home() {
  const { data, isLoading, error } = api.user.sayMyName.useQuery({ name: "Usama" });
  if (error) return <div>Error</div>;
  if (isLoading) return <div>Loading...</div>;
  return <div>{data.name}</div>;
}
\`\`\`

---

## Run Project

From the root, run:

\`\`\`bash
yarn dev:parallel
\`\`\`

Your monorepo now runs both **server + client** with type-safe APIs via tRPC. 🚀
    `,
  },
  {
    blogId: 'blockchain-terms',
    title: '8 most common Blockchain terms explained',
    author: 'Faisal Nawaz',
    authorImage: "/author1.png",
    date: 'February 16, 2023',
    image: '/blogs/blog4.jpg',
    excerpt:
      'Understand blockchain better by learning 8 of the most common terms explained simply.',
    content: `
## 8 most common Blockchain terms explained

In this article I will discuss and explain most commonly used blockchain terminologies that will help you understand and grow as a Blockchain developer.

**Note:** Please read from start to end because each term is related to one another and are explained in a sequential way.

---

### 1. Smart Contracts
A smart contract consists of code written in Solidity which holds the power to interact with blockchain just like JavaScript code has power to interact with JS compilers.  
They are also immutable — once deployed, the code cannot be changed.

---

### 2. Networks or Chains
Blockchain networks offer decentralised infrastructure for building and deploying decentralised applications (dApps) and smart contracts.  

Think of a blockchain like the world 🌍 and its countries as networks. You can open a Mr.Beast Burger shop in Canada, and then another in Pakistan — same brand, different environments.  
Similarly, the same smart contract can be deployed on different blockchain networks (Ethereum, Polygon, etc.).

---

### 3. Mainnet and Testnet
Mainnet = production environment (real transactions).  
Testnet = development environment (fake coins, for testing).

Examples:  
- Ethereum testnet → **Goerli**  
- Polygon testnet → **Mumbai**

---

### 4. Faucets
A faucet is a service that gives you free testnet crypto to experiment with.  
- [Goerli faucet](https://goerlifaucet.com/)  
- [Mumbai faucet](https://mumbaifaucet.com/)

---

### 5. Wallet
A Web3 wallet is required to hold cryptocurrencies or process blockchain transactions (similar to payment gateways in Web2).

---

### 6. Coins
Each network has its own currency (like CAD in Canada, PKR in Pakistan).  
Example: Ethereum uses **ETH**, Polygon uses **MATIC**.

---

### 7. Gas Fees
Every blockchain transaction needs a fee for computation, called **Gas Fee**.  
Gas depends on network traffic. Write transactions cost gas, read transactions are free.

---

### 8. Scans
Scans let you view your blockchain transactions by entering a transaction hash, wallet address, or contract address.  
Each network has:  
- Mainnet Scan (real transactions)  
- Testnet Scan (test transactions)

---

Enjoyed reading? Don’t forget to 👏 clap!
    `,
  },
  {
    blogId: 'lazy-mint-nft',
    title: 'How to Lazy Mint an NFT in your marketplace',
    author: 'Faisal Nawaz',
    authorImage: "/author1.png",
    date: 'January 7, 2023',
    image: '/blogs/blog5.webp',
    excerpt: 'Learn how to implement lazy minting for NFTs, saving gas fees and enabling efficient marketplace transactions.',
    content: `
## How to Lazy Mint an NFT in your marketplace

NFTs?
NFTs (Non-Fungible-Token) are are unique digital assets that can be used as a form of digital art,as a collectible or as a form of digital ownership.

---

## What is Minting?

Minting an NFT is the process of creating and publishing NFT to blockchain.NFT is minted by creating unique identifier asset and register it on blockchain.

To mint an NFT, you need to follow these steps:

1. Choose a blockchain that supports the creation of NFTs, such as Ethereum or EOS.
2. Create a digital asset that you want to represent as an NFT. This could be a piece of art, a video, or any other type of digital file.
3. Use a tool or platform that allows you to create an NFT on the chosen blockchain. This typically involves creating a smart contract and uploading the digital asset to be stored on the blockchain.
4. Set the parameters for the NFT, such as the name, description, and any other relevant details.
5. Pay the fees for creating the NFT, which are typically paid in the blockchain’s native cryptocurrency.
6. Once the NFT is created, it will be assigned a unique identifier and can be bought, sold, and traded on the open market.

---

## Disadvantages of Minting

If we talk about evil of blockchain world that would be gas fee that signer or caller of transaction needs to pay whenever he posting some data on blockchain.It’s same as your car need’s gas to run and your transactions on blockchain need’s gas fee to proceed successfully.One other pitfall of gas fee is its value is not constant however it fluctuates based upon the traffic of transactions happening on blockchain which can 1$ to thousands dollars depending on the traffic on blockchain.So minting NFT’s on blockchain can be quite expensive especially for NFT Creators.That’s why most creator’s preferred to mint in midnight hours (1am to 5am) to pay less gas fee.To overcome this problem blockchain community introduced concept of lazy minting so lets deep dive into it.

---

## Lazy Minting

As of now you would have already guessed Lazy Minting has something to do with gas prices.If you are thinking that yes you are right.So what if i told you from paying thousands dollars for minting now nft can be minted free without paying any single gas fee with the help of lazy minting yes that’s possible.Lazy Minting is enhanced way of minting where creator’s can mint their NFT free without paying any gas fee.

In Lazy Minting NFT is minted off-chain or not minted directly to chain so at time of minting NFT data thats need to be posted on blockchain is saved in one of the marketplace database by signing cryptographic signature with NFT data and creator wallet’s private key and minting on chain occurs when nft is bought by buyer so at the end it will be who will be initiating minting transaction on blockchain and will be paying gas fee for minting.

---

## Advantages of Lazy-Minting

- Minting or selling NFT’s in marketplaces has become easier for NFT Creator’s as they don’t need to pay huge upfront gas fee anymore to sell their unique asset.
- On those nft will be minted on chain that are sold which will result’s in less number of transactions on blockchain which will eventually result’s in less gas fee as there will be decrease in traffic on blockchain.

---

## Disadvantages of Lazy-Minting

- NFT’s are minted off-chain which means there record is not publicly available until they are sold

---

## How It Works

In Lazy Minting, instead of minting nft direclty on blockchain NFT’s data is cryptographic signature is created with creator wallet’s private key.

That signed NFT data cryptographic signature act as a vocher or token which later on can be used to redeem your nft at blockchain.NFT voucher have all the information that needed to be posted on blockchain.It can also have any additional information depending upon marketplace contract logic.

Here’s how NFT voucher look like in your solidity contract:

\`\`\`solidity
struct NFTVoucher {
  uint256 tokenId; // nft tokenid
  uint256 price;   // price for nft
  string uri;      // nft uri holding nft metadata
  bytes signature; // creator signed cryptographic signature of nft data.
}
\`\`\`

In above solidity struct you can look it has following four properies:

- **tokenId**: represents nft id or token that will posted as nft id on blockchain.
- **uri**: holds the url to nft metadata uploaded on some decentralized storage like ipfs and will be posted on blockchain as nft data.
- **price**: additionally it holds price that will be the price at which nft will be sold.
- **signature**: additonally it also holds cryptographic signature of nft data with creator wallet which will used to redeem nft later on at the time of purchase.

---

## How signing works?

Signing a voucher can be problematic in some cases since some third party can take signed data and can use in some other context.For Example they take signature that was signed on GOERLI for NFT authorization and try to use it with contract that was deployed on mainnet.To overcome such situations Ethereum Community has introduced EIP-712 a standard for signing typed,structured data. Signatures created with EIP-712 are “bound” to a specific instance of a smart contract running on a specific network.

---

## Implementation

To Implement Lazy Minting in your market place.we will need solidity smart contract and createVoucher function in frontend app that will be responsible to interact with metamask and create cryptographic signature for nft data.We will be using ether.js for metamask interaction and will be using \`_signTypedData\` function from ether to sign nft data.

\`\`\`ts
const createVoucher = async (nft) => {
  const provider = new ethers.providers.Web3Provider(web3?.givenProvider);
  const signer = provider.getSigner();
  try {
    const voucher = {
      tokenId: nft?.id,
      price: nft?.price,
      uri: nft?.uri
    };
    const domain = {
      name: SIGNING_DOMAIN_NAME,
      version: SIGNING_DOMAIN_VERSION,
      verifyingContract: nft?.tokenAddress,
      chainId: Number(nft?.chainId)
    };
    const types = {
      NFTVoucher: [
        { name: 'tokenId', type: 'uint256' },
        { name: 'price', type: 'uint256' },
        { name: 'uri', type: 'string' }
      ]
    };

    const signature = await signer._signTypedData(domain, types, voucher);

    return {
      ...voucher,
      signature
    };
  } catch (err) {
    console.log('error lazy minting', err);
    throw new Error('Fail To Lazy Mint Nft');
  }
};
\`\`\`

Now our nft in minted off-chain now let’s look how to redeem nft with our Smart Contract.

This is how our **LazyMint.sol** looks like:

\`\`\`solidity
//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.17;
pragma abicoder v2;

import "hardhat/console.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";
import "@openzeppelin/contracts/utils/cryptography/draft-EIP712.sol";

contract NFT is ERC721URIStorage, EIP712, AccessControl {
   string private constant SIGNING_DOMAIN = "LazyNFT-Voucher";
   string private constant SIGNATURE_VERSION = "1";
   string public contractURI;
   address public owner;
   address public marketOwner;

   event NftSold(
       address indexed nftContract,
       uint256 indexed tokenId,
       address indexed seller,
       address buyer,
       uint256 price
   );

   constructor(
       string memory _name,
       string memory _symbol
   ) ERC721(_name, _symbol) EIP712(SIGNING_DOMAIN, SIGNATURE_VERSION) {}

   struct NFTVoucher {
       uint256 tokenId;
       uint256 price;
       string uri;
       bytes signature;
   }

   function redeem(NFTVoucher calldata voucher)
       public
       payable
       returns (uint256)
   {
       address signer = _verify(voucher);
       require(msg.value >= voucher.price, "Insufficient funds to redeem");

       _mint(signer, voucher.tokenId);
       _setTokenURI(voucher.tokenId, voucher.uri);
       payable(signer).transfer(msg.value);
       _transfer(signer, msg.sender, voucher.tokenId);

       emit NftSold(
           address(this),
           voucher.tokenId,
           signer,
           msg.sender,
           voucher.price
       );

       return voucher.tokenId;
   }

   function _hash(NFTVoucher calldata voucher)
       internal
       view
       returns (bytes32)
   {
       return
           _hashTypedDataV4(
               keccak256(
                   abi.encode(
                       keccak256(
                           "NFTVoucher(uint256 tokenId,uint256 price,string uri)"
                       ),
                       voucher.tokenId,
                       voucher.price,
                       keccak256(bytes(voucher.uri))
                   )
               )
           );
   }

   function getChainID() external view returns (uint256) {
       uint256 id;
       assembly {
           id := chainid()
       }
       return id;
   }

   function _verify(NFTVoucher calldata voucher)
       internal
       view
       returns (address)
   {
       bytes32 digest = _hash(voucher);
       return ECDSA.recover(digest, voucher.signature);
   }

   function supportsInterface(bytes4 interfaceId)
       public
       view
       virtual
       override(AccessControl, ERC721)
       returns (bool)
   {
       return
           ERC721.supportsInterface(interfaceId) ||
           AccessControl.supportsInterface(interfaceId);
   }
}
\`\`\`

---

## Conclusion

Lazy minting is growing trend in nft world which has gain attention of famous market places like OpenSea and Rariable.Above implementation shows how you can introduce lazy minting in your marketplace but you can have additional logics or use cases according to your marketplace business logic.(e.g you can charge 2.5 percent of selling cost from seller as market listing fees instead of transferring all cost to creator or seller).
    `
  },
  
  
]
