/**
 * Identifies the social media platform or content type of a URL
 * @param url - The URL to analyze
 * @returns Platform name or 'miscellaneous'
 */
export const identifySocialPlatform = (url: string): string => {
  console.log(url, 'original url');
  try {
    // Handle empty or invalid URLs
    if (!url) return 'miscellaneous';

    // Create URL object to extract hostname
    const urlObj = new URL(url.toLowerCase());
    const hostname = urlObj.hostname;
    console.log(hostname, 'hostname');

    // Social media patterns
    const platforms: Record<string, string[]> = {
      youtube: ['youtube.com', 'youtu.be', 'yt.be'],
      twitter: ['twitter.com', 'x.com', 't.co'],
      facebook: ['facebook.com', 'fb.com', 'fb.me'],
      instagram: ['instagram.com', 'instagr.am'],
      tiktok: ['tiktok.com', 'vm.tiktok.com'],
      linkedin: ['linkedin.com', 'lnkd.in'],
      pinterest: ['pinterest.com', 'pin.it'],
      reddit: ['reddit.com', 'redd.it'],
      snapchat: ['snapchat.com'],
      whatsapp: ['whatsapp.com', 'wa.me'],
      telegram: ['telegram.org', 't.me'],
      github: ['github.com', 'gist.github.com'],
      medium: ['medium.com'],
      spotify: ['spotify.com', 'open.spotify.com'],
      soundcloud: ['soundcloud.com', 'snd.sc'],
    };

    // Normalize hostname (remove www. prefix)
    const normalizedHostname = hostname.replace(/^www\./, '');

    // Check hostname against platform patterns
    for (const [platform, domains] of Object.entries(platforms)) {
      if (
        domains.some(
          (domain) =>
            normalizedHostname === domain || normalizedHostname.endsWith(domain)
        )
      ) {
        return platform;
      }
    }

    return 'miscellaneous';
  } catch (error) {
    // URL parsing failed
    return 'miscellaneous';
  }
};
