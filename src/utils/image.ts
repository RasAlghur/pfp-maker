// src/utils/image.ts
export async function resampleToSize(url: string, size = 1080): Promise<string> {
    // If images are already 1080x1080, just return the URL
    const img = await new Promise<HTMLImageElement>((resolve, reject) => {
        const i = new Image();
        i.onload = () => resolve(i);
        i.onerror = (e) => reject(e);
        i.src = url;
    });

    // Check if image is already the right size
    if (img.naturalWidth === size && img.naturalHeight === size) {
        // Return original data URL
        const canvas = document.createElement('canvas');
        canvas.width = size;
        canvas.height = size;
        const ctx = canvas.getContext('2d');
        if (!ctx) throw new Error('2D context not available');

        ctx.drawImage(img, 0, 0, size, size);
        return canvas.toDataURL('image/png');
    }

    // If not 1080x1080, resize it
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error('2D context not available');

    // Simple resize maintaining aspect ratio (center in canvas)
    const sw = img.naturalWidth;
    const sh = img.naturalHeight;

    // Calculate scale to fit
    const scale = Math.min(size / sw, size / sh);
    const dw = sw * scale;
    const dh = sh * scale;
    const dx = (size - dw) / 2;
    const dy = (size - dh) / 2;

    ctx.drawImage(img, 0, 0, sw, sh, dx, dy, dw, dh);

    return canvas.toDataURL('image/png');
}