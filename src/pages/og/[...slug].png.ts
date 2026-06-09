import { getCollection } from 'astro:content';
import satori from 'satori';
import { html } from 'satori-html';
import { Resvg } from '@resvg/resvg-js';
import fs from 'fs';
import path from 'path';

export async function getStaticPaths() {
  const posts = await getCollection('blog');
  return posts.map((post) => ({
    params: { slug: post.id },
    props: {
      title: post.data.title,
      category: post.data.category || 'Analysis',
    },
  }));
}

export async function GET({ props }) {
  const { title, category } = props;

  // Read the Inter font from the locally installed fontsource package
  const fontPath = path.resolve('./node_modules/@fontsource/inter/files/inter-latin-800-normal.woff');
  const fontData = fs.readFileSync(fontPath);

  const markup = html`
    <div style="display: flex; flex-direction: column; width: 1200px; height: 630px; background-color: #0c1220; color: white; padding: 80px; box-sizing: border-box; justify-content: space-between; position: relative;">
      
      <!-- Background subtle grid -->
      <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; display: flex;">
        <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; display: flex; background-image: radial-gradient(circle at top left, rgba(204, 0, 0, 0.15) 0%, transparent 40%), radial-gradient(circle at bottom right, rgba(0, 102, 255, 0.1) 0%, transparent 40%);"></div>
      </div>

      <div style="display: flex; flex-direction: column;">
        <div style="display: flex; align-items: center; margin-bottom: 30px;">
          <div style="display: flex; background-color: #cc0000; color: white; padding: 8px 24px; border-radius: 9999px; font-size: 24px; font-weight: 800; letter-spacing: 0.1em; text-transform: uppercase;">
            ${category}
          </div>
          <div style="display: flex; margin-left: 20px; font-size: 24px; font-weight: 800; color: #cc0000; text-transform: uppercase; letter-spacing: 0.1em;">
            Median Point
          </div>
        </div>
        
        <div style="display: flex; font-size: 80px; font-weight: 800; line-height: 1.1; letter-spacing: -0.02em;">
          ${title}
        </div>
      </div>

      <div style="display: flex; align-items: center; justify-content: space-between; border-top: 2px solid rgba(255, 255, 255, 0.1); padding-top: 40px;">
        <div style="display: flex; align-items: center;">
          <div style="display: flex; width: 64px; height: 64px; border-radius: 32px; background-color: #1a1a2e; border: 2px solid rgba(255, 255, 255, 0.2); overflow: hidden; justify-content: center; align-items: center;">
             <div style="display: flex; font-size: 32px;">SV</div>
          </div>
          <div style="display: flex; font-size: 32px; font-weight: 800; margin-left: 20px; color: #e5e7eb;">
            Sudhanshu Verma
          </div>
        </div>
        <div style="display: flex; font-size: 28px; font-weight: 800; letter-spacing: 0.2em; color: rgba(255, 255, 255, 0.5);">
          MEDIANPOINT.COM
        </div>
      </div>
    </div>
  `;

  const svg = await satori(markup, {
    width: 1200,
    height: 630,
    fonts: [
      {
        name: 'Inter',
        data: fontData,
        weight: 800,
        style: 'normal',
      },
    ],
  });

  const resvg = new Resvg(svg, {
    fitTo: {
      mode: 'width',
      value: 1200,
    },
  });

  const pngData = resvg.render().asPng();

  return new Response(pngData, {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
}
