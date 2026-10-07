import cv2
import os

CHEF_TRIOS = r"C:\Users\ssour\OneDrive\Documents\sbn-freestyler\sbn-freestyler\Chef_Trios"
PUBLIC_IMAGES = r"C:\Users\ssour\OneDrive\Documents\sbn-freestyler\sbn-freestyler\public\images"
PUBLIC_VIDEOS = r"C:\Users\ssour\OneDrive\Documents\sbn-freestyler\sbn-freestyler\public\videos"

def extract_frame(video_path, output_path, time_ms=5000):
    """Extract a frame from a video at the given time (ms)."""
    cap = cv2.VideoCapture(video_path)
    if not cap.isOpened():
        print(f"  Cannot open video: {video_path}")
        return False
    cap.set(cv2.CAP_PROP_POS_MSEC, time_ms)
    ret, frame = cap.read()
    cap.release()
    if ret:
        cv2.imwrite(output_path, frame)
        print(f"  Extracted frame to: {output_path}")
        return True
    else:
        print(f"  Failed to extract frame from: {video_path}")
        return False

# Files to process for each section

# 1. Saudia Hyper & Rawabi Hyper -> rawabi-3-1.mp4
# Extract frame for the image slot in Commercial Brands
rawavi_video = os.path.join(PUBLIC_VIDEOS, "rawabi-3-1.mp4")
rawavi_jpg = os.path.join(PUBLIC_IMAGES, "rawabi-3-1.jpg")
if os.path.exists(rawavi_video):
    extract_frame(rawavi_video, rawavi_jpg, time_ms=3000)
else:
    print(f"  Video not found: {rawavi_video}")

# 2. Tea World / Naimi / Café de Classico -> cafe_de_classico.mov / recentworks_momstea.mp4
# Extract frame from cafe_de_classico.mov for the image slot
cafe_video = os.path.join(PUBLIC_VIDEOS, "cafe_de_classico.mov")
cafe_jpg = os.path.join(PUBLIC_IMAGES, "cafe_de_classico.jpg")
if os.path.exists(cafe_video):
    extract_frame(cafe_video, cafe_jpg, time_ms=3000)
else:
    print(f"  Video not found: {cafe_video}")

# Also extract from recentworks_momstea.mp4
momstea_video = os.path.join(PUBLIC_VIDEOS, "recentworks_momstea.mp4")
momstea_jpg = os.path.join(PUBLIC_IMAGES, "recentworks_momstea.jpg")
if os.path.exists(momstea_video):
    extract_frame(momstea_video, momstea_jpg, time_ms=3000)
else:
    print(f"  Video not found: {momstea_video}")

# 3. Weddings/Birthdays - check with_im_vijayan.mp4
with_im_video = os.path.join(PUBLIC_VIDEOS, "with_im_vijayan.mp4")
with_im_jpg = os.path.join(PUBLIC_IMAGES, "with_im_vijayan.jpg")
if os.path.exists(with_im_video):
    extract_frame(with_im_video, with_im_jpg, time_ms=3000)
else:
    print(f"  Video not found: {with_im_video}")

# 4. Also check FIFA 2026 video
fifa_video = os.path.join(PUBLIC_VIDEOS, "FIFA  2026 VLG SNAN (2).mp4")
fifa_jpg = os.path.join(PUBLIC_IMAGES, "fifa_2026_vlg_snan.jpg")
if os.path.exists(fifa_video):
    extract_frame(fifa_video, fifa_jpg, time_ms=3000)
else:
    print(f"  Video not found: {fifa_video}")

# 5. Kerela blasters
kerala_video = os.path.join(PUBLIC_VIDEOS, "keralablasters.mp4")
kerala_jpg = os.path.join(PUBLIC_IMAGES, "keralablasters.jpg")
if os.path.exists(kerala_video):
    extract_frame(kerala_video, kerala_jpg, time_ms=3000)
else:
    print(f"  Video not found: {kerala_video}")

# 6. Baladna Qatar
baladna_video = os.path.join(PUBLIC_VIDEOS, "baladna_qatar.mov")
baladna_jpg = os.path.join(PUBLIC_IMAGES, "baladna-qatar.jpg")
if os.path.exists(baladna_video):
    extract_frame(baladna_video, baladna_jpg, time_ms=3000)
else:
    print(f"  Video not found: {baladna_video}")

# 7. Chef Trios main
chef_video = os.path.join(PUBLIC_VIDEOS, "Chef_Trios.mov")
chef_jpg = os.path.join(PUBLIC_IMAGES, "chef-trios.jpg")
if os.path.exists(chef_video):
    extract_frame(chef_video, chef_jpg, time_ms=3000)
else:
    print(f"  Video not found: {chef_video}")

# 8. SaveClip video
saveclip_video = os.path.join(PUBLIC_VIDEOS, "SaveClip.App_AQOlQP5DQP74GYuu56MBw-YHjdU0-0B5PGtl7Z4dwePFb-WZfKoIjkJVdwTwKf4iA5wePAR2_JnUibtLPe1inUeh8KY4z61bvGmx2ic.mp4")
saveclip_jpg = os.path.join(PUBLIC_IMAGES, "saveclip.jpg")
if os.path.exists(saveclip_video):
    extract_frame(saveclip_video, saveclip_jpg, time_ms=5000)
else:
    print(f"  Video not found: {saveclip_video}")

# 9. supermarket_recentworks
supermarket_video = os.path.join(PUBLIC_VIDEOS, "supermarket_recentworks.mp4")
supermarket_jpg = os.path.join(PUBLIC_IMAGES, "supermarket-recentworks.jpg")
if os.path.exists(supermarket_video):
    extract_frame(supermarket_video, supermarket_jpg, time_ms=3000)
else:
    print(f"  Video not found: {supermarket_video}")

print("\nFrame extraction complete.")