#!/bin/bash

# 🚀 Script de déploiement rapide pour GitHub Pages

echo "🔨 Building the project..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo "🚀 Deploying to GitHub Pages..."
    npm run deploy
    
    if [ $? -eq 0 ]; then
        echo "🎉 Deployment successful!"
        echo "📍 Your site will be available at:"
        echo "   https://josephgit2025.github.io/joseph-portfolio/"
        echo ""
        echo "⏰ Please wait 2-5 minutes for the changes to take effect."
    else
        echo "❌ Deployment failed!"
        exit 1
    fi
else
    echo "❌ Build failed!"
    exit 1
fi
